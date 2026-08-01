@echo off
setlocal
title Lingjing Sentinel Demo Launcher
cd /d "%~dp0"

echo.
echo ==================================================
echo   Beijing Smart City - Lingjing Sentinel Demo
echo ==================================================
echo.

set "NODE_EXE=%~dp0runtime\node.exe"
if exist "%NODE_EXE%" goto RUN_DEMO

where node >nul 2>nul
if errorlevel 1 goto NO_NODE
set "NODE_EXE=node"

:RUN_DEMO
if not exist "serve-demo.mjs" goto FILE_MISSING
if not exist "offline-demo\index.html" goto FILE_MISSING

echo [STARTING] Launching the offline demo.
echo [NOTICE] Keep this window open during the presentation.
echo [NOTICE] Your browser will open automatically.
echo.
"%NODE_EXE%" serve-demo.mjs
set "EXIT_CODE=%ERRORLEVEL%"

echo.
echo [STOPPED] Demo server exited with code %EXIT_CODE%.
echo Keep this window open and capture any error message above.
pause
exit /b %EXIT_CODE%

:NO_NODE
echo [ERROR] No bundled runtime or system Node.js was found.
echo Check whether runtime\node.exe was removed by antivirus software.
echo.
pause
exit /b 1

:FILE_MISSING
echo [ERROR] The demo package is incomplete.
echo Extract the complete ZIP before running this launcher.
echo.
pause
exit /b 1
