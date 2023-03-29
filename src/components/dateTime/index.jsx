import { defaultProps } from "./defaultProps";

function DateTime({ getClassName, value }) {
    const date = new Date(value * 1000)
    const relativeDate = Intl.RelativeTimeFormat("en", { numeric: "auto" })
    return (
        <time dateTime={date.toISOString}></time>
    )
}