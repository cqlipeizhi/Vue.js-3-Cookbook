const defaultOption = {
    useSaveFunction: true,
    useRetrieveFunction:true,
    onSave: value => JSON.stringify(value),
    onRetrieve: value => JSON.parse(value)
}

export default{
    install(app,option){
        const baseOptions={
            ...defaultOption,
            ...option
        }

        app.config.globalProperties.$localStorage=generateStorageObject(window.localStorage,baseOptions)

        app.config.globalProperties.$sessionStorage=generateStorageObject(window.localStorage,baseOptions)
    }
}

const generateStorageObject = (windowStorage, options) => ({
    set(key, value) {
        windowStorage.setItem(key,options.useSaveFunction?options.onSave(value):value)
    },
    get(key){
        const item=windowStorage.getItem(key)
        return options.useRetrieveFunction?options.onRetrieve(item):item
    },
    remove(key){
        windowStorage.removeItem(key)
    },
    clear(){
        windowStorage.clear()
    }
})