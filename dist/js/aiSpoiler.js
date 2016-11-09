/* *
 * aiSpoiler - Simple JavaScript Spoiler.
 * Alexander Igorevich: https://github.com/alexanderkx
 * repo: https://github.com/alexanderkx/aiSortTable
 *
 */

var aiSpoiler = (function() {
    
    var config = {
        showText: "Show",
        hideText: "Hide",
        bottom: false,
        element: {
            tagName: "button",
            attr: {
                title: "my title",
                class: "btn"
            }
        }
    };

    var activate = function(s) {
        for (var i = 0; i < s.length; i++) {
            s[i].style.display = "none";
            s[i].style.opacity = '0';
            createBtn(s[i]);
        }
    };

    var createBtn = function(s) {
        var newItem = document.createElement(config.element.tagName);
        var btnText = '';
        config.show ? btnText = config.hideText : btnText = config.showText;
        var textnode = document.createTextNode(btnText);

        newItem.classList.add("ai_hidden__btn");
        newItem.appendChild(textnode);
        var attr = config.element.attr;
        for (var attribute in attr) {
            newItem.setAttribute(attribute, attr[attribute]);
        }
        var parentDiv = s.parentNode;
        config.bottom ? s.parentNode.insertBefore(newItem, s.nextSibling) : parentDiv.insertBefore(newItem, s);
        clickEvent(newItem);
    };

    var clickEvent = function(newItem) {
        newItem.addEventListener("click", function(e) {
            e.preventDefault(); var el = '';
            config.bottom ? el = this.previousElementSibling : el = this.nextElementSibling;
            if (el.style.display == "none") {
                fadeIn(el);
                this.textContent = config.hideText;
            } else {
                fadeOut(el);
                this.textContent = config.showText;
            }
        });
    };

    var fadeOut = function(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    var fadeIn = function(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";

        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }


    return {
        initSpoiler: function(selector, options) {
            options = options || {};
            for (var opt in config) {
                if (options.hasOwnProperty(opt)) {
                    config[opt] = options[opt];
                }
            }
            var sections = document.querySelectorAll(selector);
            activate(sections);
        }
    }

});