function check(str) {
    let regexp = /^[(][0-9]{2}[)][-][(][0][0-9]{9}[)]$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
function checkSDT() {
    let sdt = document.getElementById("txt").value;
    console.log(check(sdt));

}