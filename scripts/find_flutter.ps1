# Find Flutter in common Windows locations. Returns the bin folder path or $null.
function Find-FlutterPath {
    $candidates = @(
        "C:\flutter\bin",
        "C:\src\flutter\bin",
        "$env:LOCALAPPDATA\flutter\bin",
        "$env:USERPROFILE\flutter\bin",
        "$env:ProgramFiles\flutter\bin",
        "$env:ProgramFiles(x86)\flutter\bin"
    )
    foreach ($dir in $candidates) {
        if (Test-Path "$dir\flutter.bat") {
            return $dir
        }
    }
    # Check PATH
    $flutterInPath = Get-Command flutter -ErrorAction SilentlyContinue
    if ($flutterInPath) {
        $binDir = Split-Path (Split-Path $flutterInPath.Source -Parent) -Parent
        if (Test-Path "$binDir\bin\flutter.bat") { return "$binDir\bin" }
    }
    return $null
}

$flutterBin = Find-FlutterPath
if ($flutterBin) {
    Write-Output $flutterBin
    exit 0
} else {
    Write-Error "Flutter not found. Install from https://docs.flutter.dev/get-started/install/windows or add Flutter bin to PATH."
    exit 1
}
