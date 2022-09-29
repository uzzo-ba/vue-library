import './style.css'
import VueInput from "./components/ VueInput.vue"
import VueText from "./components/ VueText.vue"

export default {
    install: (app: any, options: any) => {
        app.component("VueInput", VueInput).component("VueText", VueText)
    }
}
export { VueInput, VueText }
