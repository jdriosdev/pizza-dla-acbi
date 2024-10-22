function ajaxGetXMLDocument(xmlFile) {

    if (window.XMLHttpRequest) {

        xmlhttp = new XMLHttpRequest();

    }

    else {

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }



    xmlhttp.open("GET", xmlFile, false);

    xmlhttp.send();

    return xmlhttp.responseXML;

}//function ajaxGetXMLDocument(xmlFile)



/*****************************************************************************

 * Function: createCard(name, price, image)                     *

 * Function Description:                                                     *

 * This function creates a card with parameters item name, price,            *

 *   description and image file name                                         *

 *****************************************************************************/

function createCard(parName, parPrice, parImage) {

    //Create Column

    let attributeList = { class: "col" };

    const thisColumn = createElementWithAttributes("div", attributeList);



    //Create Card

    attributeList = { class: "card shadow" };

    const thisCard = createElementWithAttributes("div", attributeList);



    //Create Card Image top

    attributeList = {
        class: "card-img-top"

        , src: "images/" + parImage

        , alt: "Card image cap"

    };

    const thisImageTop = createElementWithAttributes("img", attributeList);



    //Create Card Body

    attributeList = { class: "card-body" };

    const thisCardBody = createElementWithAttributes("div", attributeList);



    //Create Card Body.Card Title

    attributeList = { class: "card-title" };

    const thisCardTitle = createElementWithAttributes("h5", attributeList);

    thisCardTitle.appendChild(document.createTextNode(parName));

    thisCardBody.appendChild(thisCardTitle);



    //Create Card Body.Card Price

    attributeList = { class: "price" };

    const thisPrice = createElementWithAttributes("h6", attributeList);

    thisPrice.appendChild(document.createTextNode(parPrice));

    thisCardBody.appendChild(thisPrice);



    //Create the card

    thisCard.appendChild(thisImageTop);

    thisCard.appendChild(thisCardBody);

    thisColumn.appendChild(thisCard);

    return thisColumn;

}//function createCard(parProductDetails



/*****************************************************************************

 * Function: createElementWithAttributes(parElement, parAttributeList)       *

 * Function Description:                                                     *

 * This function creates an element with any number of attributes            *

 *---------------------------------------------------------------------------*

 * Parameter Description:                                                    *

 * 1. parElement. Element in string format. e.g. "div"                       *

 * 2. parAttributeList. Attribute(s) in json format without stringifying     *

 *    example: {"src": "myImage.jpg", class:"w-100", alt:"Image not loaded"} *

 *****************************************************************************/

function createElementWithAttributes(parElement, parAttributeList) {

    const thisElement = document.createElement(parElement);



    for (attribute in parAttributeList) {

        thisAttribute = document.createAttribute(attribute);

        thisAttribute.value = parAttributeList[attribute];

        thisElement.setAttributeNode(thisAttribute);

    }//for(attribute in parAttributeList)

    return thisElement;

}//function createElementWithAttributes(parElement, parAttributeList)



/*****************************************************************************

 * Function: createElementWithTextNode(parElement, parTextNode)              *

 * Function Description:                                                     *

 * This function creates an element with text node. example: <h1>Hello</h1>  *

 *---------------------------------------------------------------------------*

 * Parameter Description:                                                    *

 * 1. parElement. Element in string format. e.g. "div"                       *

 * 2. parTextNode. Text node in string format. e.g. "Hello"                  *

 *****************************************************************************/

function createElementWithTextNode(parElement, parTextNode) {

    const thisNewElement = document.createElement(parElement);

    const thisTitleTextNode = document.createTextNode(parTextNode);

    thisNewElement.appendChild(thisTitleTextNode);

    return thisNewElement;

}//function createElementWithTextNode(parElement, parTextNode)

