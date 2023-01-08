class webasssert{
    assertText(cyElement,value){
        if(value!=""){
            cyElement.should('have.text',value)
        }
    }
    assertUrl(value){
        cy.url().should('include',value)
    }
    visible(cyElement){
        cyElement.should('be.visible')
    }
    emptyTextBox(cyElement){
        cyElement.should('be.empty')
    }
    filledTextBox(cyElement){
        cyElement.should('not.be.empty')
    }
    notVisible(cyElement){
        cyElement.should('not.be.visible')
    }
}
let webasssertObj=new webasssert()
export default webasssertObj