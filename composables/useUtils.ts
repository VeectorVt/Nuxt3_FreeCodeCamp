export const useUtils = (home = true) => {


    const say = () => {

        home ? console.log("Hello from use utils") : console.log("Goodbye")

    }


    return {
        say
    }
}