export default async function () {
    
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };
    this.partial('./templates/home/home.hbs', this.app.userData);

    //Къде държим контролерите?
            //как съхраняваме потребителската сесия?
            //как подаваме сесията на контролерите?

            // this.loadPartials({
            //     header: './templates/common/header.hbs',
            //     footer: './templates/common/footer.hbs'
            // }).then(function() {
            //     this.partial('./templates/home/home.hbs', {loggedIn : false});
            // })

            

            // this.render('./templates/register/registerForm.hbs').then(function (html) {
            //     // this === Sammy.RenderContext
            //     this.swap(html)
            // })

}