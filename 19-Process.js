/*
Node.js 是单线程的模式运行的，但使用的是事件驱动来处理并发，这样有助于我们在多核cpu的系统上创建多个子进程，
从而提高性能。每个子进程总是带有三个流对象：child.stdin, child.stdout 和child.stderr。
他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。
*/

const fs = require('fs');
const child_process = require('child_process');

/*--child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。--*/
for (var i = 0; i < 3; i++) {
    // i传递给了子线程文件
    var workerProcess = child_process.exec('node 19-Process-Child.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);  // 打印子进程的输出结果
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}

/*----------------child_process.spawn 使用指定的命令行参数创建新进-----------------------------*/
setTimeout(
    function () {
        console.log('---------------------------------------------------');
        for (var i = 0; i < 3; i++) {
            var workerProcess = child_process.spawn('node', ['19-Process-Child.js', i]);

            workerProcess.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            workerProcess.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });

            workerProcess.on('close', function (code) {
                console.log('子进程已退出，退出码 ' + code);
            });
        }
    }, 1000);

/*----------------child_process.fork 是 spawn() 方法的特殊形式，用于创建进程-----------------------*/
setTimeout(function () {
    console.log('---------------------------------------------------');
    for (var i = 0; i < 3; i++) {
        var worker_process = child_process.fork("19-Process-Child.js", [i]);
        worker_process.on('close', function (code) {
            console.log('子进程已退出，退出码 ' + code);
        });
    }
}, 2000);