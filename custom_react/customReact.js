/*
    iss wala page me humlog khud ka react bana sikhenge , kaise react banta hai
    kya kya problem aate hai and kaise process ho ta hai 

*/


function customRender(reactElenment,Container){

    // const domElement = document.createElement(reactElenment.type)
    // domElement.innerHTML = reactElenment.children;
    // domElement.setAttribute('href', reactElenment.props.href)
    // domElement.setAttribute('target', reactElenment.props.target)

    // Container.appendChild(domElement)



const domElement = document.createElement(reactElenment.type)
domElement.innerHTML = reactElenment.children
for(const prop in reactElenment.children){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElenment.props[prop])
}
    Container.appendChild(domElement)
}


const reactElenment = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElenment,mainContainer)
