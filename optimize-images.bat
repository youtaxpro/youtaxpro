@echo off
echo Installing required packages...
npm install sharp --save-dev
echo.
echo Running image optimizer...
node image-optimizer.js
echo.
echo Press any key to exit...
pause > nul
