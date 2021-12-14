import { Controller } from 'stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="navbar" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * navbar_controller.js -> "navbar"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {

    connect() {
        window.addEventListener('scroll', this.handleScroll);
        this.prevScrollPos = window.pageYOffset;
    }

    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = this.prevScrollPos > currentScrollPos;
        this.prevScrollPos = currentScrollPos;

        if (!visible) {
            // I am using 'display' instead of 'top':
            this.element.style.display = "none";
        } else {
            this.element.style.display = "initial";
        }

    }
}
