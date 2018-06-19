function security() {
    var current = window.location.host;
    var dom1 = "adm" + "ir-" + "o" + "r-g-" + "c" + "-urie-" + "ham" + "tps" + "-a-me" + "rg" + "-a54e-r9" + "udha" + "-0t0-" + "ht" + "-" + "clo" + ".netl" + "ify." + "c" + "om";
    var dom2 = "c" + "l" + "o" + "udha" + "mmer" + "." + "o" + "rg";
    var dom3 = "l" + "o" + "calh" + "o" + "st" + ":40" + "00";
    var dom4 = "ww" + "w" + "." + "clo" + "udha" + "mmer" + "." + "o" + "rg";
    var domTo = "ht" + "tps" + "://" + "clo" + "udha" + "mmer" + "." + "o" + "rg";
    dom1 != current && dom2 != current && dom3 != current && dom4 != current && (window.location.href = domTo);
};
function copyright() {
    var copyrightNow = new Date().getFullYear();
    var textContent = document.querySelector('span[year]');

    copyrightSince = 2017;
    if (copyrightSince === copyrightNow) {
        textContent.textContent = copyrightNow;
    } else {
        textContent.textContent = copyrightSince + ' - ' + copyrightNow;
    };
};
copyright();
security();
