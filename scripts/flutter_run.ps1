# Run Flutter commands using Flutter from PATH or common install locations.
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
        $src = $cmd.Source
        return Split-Path (Split-Path $src -Parent) -Parent
    }
    return $null
}

$flutterDir = Find-FlutterPath
if (-not $flutterDir) {
    Write-Host "Flutter not found." -ForegroundColor Red
    Write-Host "1. Install: https://docs.flutter.dev/get-started/install/windows"
    Write-Host "2. Or add Flutter bin to PATH (e.g. C:\flutter\bin)"
    exit 1
}

# Ensure we use bin folder
if (-not (Test-Path "$flutterDir\bin\flutter.bat")) {
    $flutterDir = $flutterDir + "\bin"
}
$flutter = "$flutterDir\flutter.bat"

Push-Location $ProjectRoot
try {
    if (-not (Test-Path "android\app\src\main\kotlin")) {
        Write-Host "Running: flutter create ." -ForegroundColor Cyan
        & $flutter create . --project-name word_master
        if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    }
    Write-Host "Running: flutter pub get" -ForegroundColor Cyan
    & $flutter pub get
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    Write-Host "Running: flutter run" -ForegroundColor Cyan
    & $flutter run
    exit $LASTEXITCODE
} finally {
    Pop-Location
}
