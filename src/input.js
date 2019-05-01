var input = "";

document.getElementById('first-input-box').addEventListener('input',
                                                            function (e)
                                                            {
                                                                let song = e.target.value;
                                                                input = e.target.value;
                                                            }
                                                           );
document.getElementById('input-button').onclick = function() {click()};

function click() {
    document.getElementById('first-input-box').value = "";
    console.log(input);
    alert(input);
};
