# reduxPractice

### getting started

npx create-react-app my-app --template redux # calls npm executor to run create react app with template redux
this has package.json depencency cra-template-redux

### defs

reducer - (in redux) figures out state change  
function looks like (state, action) => {
    do something and return newState
}

selector - takes in state, outputs a prop/obj from the state