function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var mainNow = 0;

function freezeMoney(balance, dollar) {
    var htl = '<style>' +
        '.freezing-info-packages {font-size: 19px;color: #444;font-weight:bold;padding-top: 12px;margin-right: -10px;text-align: center;font-family: \'Open Sans Condensed\', sans-serif;z-index: 2;position: relative;line-height: 1;}' +
        '.freezing-close {position: absolute;top: 36px;right: 14px;width: 20px;height: 20px;display: block;}' +
        '.freezing-info:before {content: "";position: absolute;height: 198px;width: 280px;top: 0;right: 0;margin-top: -26px;}' +
        '.freezing-info{font-family: Arial; z-index: 991000;color: black;width: 403px;height: 207px;position: fixed;background: url("/common/modules/mod/freezebg.png") no-repeat;box-sizing: border-box;padding: 50px 50px 40px;top:56px;right:0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;margin-right:-20px;}' +
        '.freezing-info-price {font-size: 25px;color: #FFF;font-weight:bold;font-family: \'Open Sans Condensed\', sans-serif;z-index: 2;position: relative;margin-top:6px;text-align: center;}' +
        '.freezing-info-title {font-size: 27px;color: #2198CB;font-weight:bold;text-align: center;font-family: \'Open Sans Condensed\', sans-serif;z-index: 2;position: relative;text-transform: uppercase;line-height: 1.3;}' +
        '.freezing-close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}' +
        '.freezing-close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);transform: rotate(-45deg);}' +
        '.freezing-close:before, ' +
        '.freezing-close:after {content: "";position: absolute;width: 100%;height: 2px;background: #ffffff;}' +
        '@media(max-width:767px){ ' +
        '.freezing-info {width: 280px;height: 145px;padding: 35px 30px 20px;top: 56px;right: 0;margin-right: 0px;background-size: contain;} ' +
        '.freezing-info-title {font-size: 18px;} ' +
        '.freezing-info-price {font-size: 20px; margin-top: 3px;}' +
        '.freezing-info-packages {font-size: 15px;padding-top: 6px;margin-right: -10px;}' +
        '.freezing-close {top: 27px;right: 7px;} ' +
        '} ' +
        '</style>' +
        '<div class="freezing-info">' +
        '<div class="freezing-info-title">Мы заморозили цену!</div>' +
        '<div class="freezing-info-price">1$ = <span class="dynamic-freezing-info--price">' + dollar + ' грн.</span></div>' +
        '<div class="freezing-info-packages">Осталось <span class="packages-count">' + balance + '</span> штук по старому курсу' +
        '</div>' +
        '<a href="#close" class="freezing-close"></a>' +
        '</div>';
   // $(html).appendTo($('body'));
   $('body').append(htl);
    $('.freezing-close').on('click', function (e) {
        $('.freezing-info').remove();
        e.preventDefault();
        e.stopPropagation();
    });
}