describe('swangular', function () {

    beforeEach(function() {
        browser.get('http://localhost:8888');
    });

    it('Everything is loaded properly', function () {

        expect(element(by.binding('vm.test')).getText()).toEqual('This string was injected from controller');

        expect(browser.getTitle()).toEqual('Swangular Tests');

    });
    
    it('opens base sweetalert2 modal', function () {

        element(by.id('btn1')).click();

        var title = $('.swal2-modal > h2').getText();
        var content = $('.swal2-content').getText();

        expect(title).toEqual('Title');
        expect(content).toEqual('Content');

    });

    it('loads a template without controller', function () {

        element(by.id('btn2')).click();

        expect($('.swal2-modal > h2').getText()).toEqual('Template test');
        expect(element(by.id('basictemplate')).getText()).toEqual('Basic template');

    });

    it('opens swangular with template', function () {

        element(by.id('btn3')).click();

        expect(element(by.binding('vm.content')).getText()).toEqual('This string was injected from modalcontroller');

    });

    it('opens swangular with scope', function () {

        element(by.id('btn4')).click();

        expect(element(by.binding('content')).getText()).toEqual('This string was injected from scope');

    });

    it('resolves and inject dependencies', function () {

        element(by.id('btn5')).click();

        expect(element(by.binding('content')).getText()).toEqual('This is resolved content');

    });

    it('executes a preConfirm method on controller that instantiates modal', function () {

        // Open modal
        element(by.id('btn6')).click();

        // Click confirm button
        $('.swal2-confirm').click();

        // Check if preconfirm is executed
        expect(element(by.binding('vm.preConfirmContent')).getText()).toEqual('This string was inject by preConfirm');

    });

    it('executes a preConfirm method on modal controller', function () {

        // Open modal
        element(by.id('btn7')).click();

        // Click confirm button
        $('.swal2-confirm').click();

        // Check if preconfirm is executed
        expect(element(by.binding('vm.modalPreConfirmContent')).getText()).toEqual('This string was inject by preConfirm');

    });

    it('executes a preConfirm method on when no controller is passed', function () {

        // Open modal
        element(by.id('btn8')).click();

        // Click confirm button
        $('.swal2-confirm').click();

        // Check if preconfirm is executed
        expect(element(by.binding('vm.preConfirmContent')).getText()).toEqual('This string was inject by preConfirm');

    });


});