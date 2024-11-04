function getButtonStyling(styleType){
    if(styleType == "primary"){
        return "bg-blue-400";
    }

    else if(styleType == "secondary"){
        return "bg-gray-400";
    }

    else if(styleType == "error"){
        return "bg-red-400";
    }

    else if(styleType == "success"){
        return "bg-green-400";
    }

    else if(styleType == "warning"){
        return "bg-orange-400";
    }
}

export default getButtonStyling;