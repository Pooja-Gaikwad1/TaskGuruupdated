class webActions{
    clickButton(cyElement){
        cyElement.click()
    }
    clickButtonforce(cyElement){
        cyElement.click({force:true})
    }
    typeText(cyElement,value){
        if(value!=""){
            cyElement.clear({force:true}).type(value,{force:true})
        }
    }
    checkbox(cyElement,value){
        if(value!=""){
            cyElement.check(value,{force:true})
        }
    }
    dropdown(cyElement,value){
        if(value!=""){
            cyElement.select(value,{force:true})
        }
    }
}
let webActionsObj=new webActions()
export default webActionsObj