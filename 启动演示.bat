@echo off
chcp 65001 >nul
title 京域智城 - 灵境哨兵启动器
cd /d "%~dp0"

echo.
echo ==================================================
echo   京域智城 × 灵境哨兵比赛演示项目
echo ==================================================
echo.

where node >nul 2>nul
if errorlevel 1 goto ONLINE

echo [启动中] 本地演示地址：http://127.0.0.1:3000
start "京域智城本地服务" cmd /k "cd /d ""%~dp0"" && set PORT=3000 && node serve-demo.mjs"
timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3000/"
exit /b 0

:ONLINE
echo [提示] 未检测到可用的 Node.js 环境，正在打开在线演示版本。
start "" "https://fgonbhik.github.io/lingjing-sentinel/"
timeout /t 3 /nobreak >nul
exit /b 0
