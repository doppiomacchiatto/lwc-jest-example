import { createElement } from 'lwc';
import HelloWorld from 'c/helloWorld';

describe('c-helloWorld', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('c-helloWorld', {
            is: HelloWorld
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Hello, World!');
    });

    it('is accessible', () => {
        const element = createElement('c-helloWorld', {
            is: HelloWorld
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(element).toBe(element)
        });
    });
});