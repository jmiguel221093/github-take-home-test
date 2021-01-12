const getRequestErrorMessage = (code, type) => {
    switch(code){
        case 404:
            return `The ${type} you are looking for could not be found`
    }
}

export default getRequestErrorMessage;