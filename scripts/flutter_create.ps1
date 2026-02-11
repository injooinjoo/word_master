# Run "flutter create ." using Flutter from PATH or common install locations.
# Usage: .\scripts\flutter_create.ps1
#    or: .\scripts\flutter_create.ps1 -FlutterPath "D:\flutter\bin"
param([string]$FlutterPath)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path $PSScriptRoot -Parent

function Find-FlutterPath {
    $candidates = @(
        "C:\flutter\bin",
        "C:\src\flutter\bin",
        "$env:LOCALAPPDATA\flutter\bin",
        "$env:USERPROFILE\flutter\bin",
        "$env:ProgramFiles\flutter\bin"
    )
    foreach ($dir in $candidates) {
        if (Test-Path "$dir\flutter.bat") { return $dir }
    }
    $cmd = Get-Command flutter -ErrorAction SilentlyContinue
    if ($cmd) {
        $parent = Split-Path (Split-Path $cmd.Source -Parent) -Parent
        if (Test-Path "$parent\bin\flutter.bat") { return "$parent\bin" }
        return $parent
    }
    return $null
}

$flutterDir = if ($FlutterPath -and (Test-Path "$FlutterPath\flutter.bat")) {
    $FlutterPath
} else {
    Find-FlutterPath
}
if (-not $flutterDir) {
    Write-Host "Flutter not found." -ForegroundColor Red
    Write-Host ""
    Write-Host "Option A - Install Flutter: https://docs.flutter.dev/get-started/install/windows"
    Write-Host ""
    Write-Host "Option B - Run with your Flutter path:"
    Write-Host '  .\scripts\flutter_create.ps1 -FlutterPath "C:\flutter\bin"'
    Write-Host "Option C - Add Flutter to PATH (if already installed):"
    Write-Host '  $env:Path = "C:\flutter\bin;" + $env:Path'
    Write-Host "  Then run: flutter create ."
    exit 1
}

if (-not (Test-Path "$flutterDir\flutter.bat")) {
    $flutterDir = $flutterDir.TrimEnd("\bin") + "\bin"
}
$flutter = "$flutterDir\flutter.bat"
Write-Host "Using Flutter: $flutter" -ForegroundColor Green
Push-Location $ProjectRoot
try {
    & $flutter create . --project-name word_master
    exit $LASTEXITCODE
} finally {
    Pop-Location
}
