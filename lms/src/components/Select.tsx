import { ChangeEvent } from "react";
type selectprop = {
    label: string,
    value: string,
    optionList: any[],
    onChange: (value:string)=> void
}


function Select(props: selectprop) {
    function Change(e:ChangeEvent<HTMLSelectElement>) {
        props.onChange(e.target.value)
    }
    return (
        <select value={props.value} onChange={Change} >
            {props.optionList.map((x, i) => (
                <option value={x.value}>{x.value}</option>
            ))}
        </select>
    )
}
export default Select;
