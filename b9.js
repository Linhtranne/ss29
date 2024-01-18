//Không đồng bộ : Hàm gọi callback và chờ đến khi callback hoàn thành trước khi tiếp tục thực hiện các lệnh tiếp theo. Điều này thường xảy ra trong các trường hợp đồng bộ.

function synchronousFunction(callback) {
    console.log("Doing something...");
    callback();
    console.log("Continue with other tasks...");
}
//Bất đồng bộ : Trong các tác vụ bất đồng bộ như đọc file hoặc gửi request HTTP, hàm tiếp tục thực hiện các lệnh khác mà không chờ đợi callback hoàn thành.


function asynchronousFunction(callback) {
    console.log("Doing something...");
    setTimeout(function () {
        callback();
    }, 1000);
    console.log("Continue with other tasks...");
}