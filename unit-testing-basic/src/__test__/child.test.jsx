import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Child from "../components/child";


test("check peops Value" , () =>{
    const { getByTestId} = render (<Child count={500}/>);
    const getElement = getByTestId(`child-count-value`);

    expect(getElement.textContent).toBe("500");
})

test("check Toggle Button", ()=>{   
    const {getByTestId} = render(<Child count={100}/>);
    const getToggleButtonElement =  getByTestId('toggle-button');
    const getToggleTextElement = getByTestId('toggle-text');

    
    expect(getToggleTextElement.textContent).toBe(`false`);

    fireEvent.click(getToggleButtonElement);
    expect(getToggleTextElement.textContent).toBe(`true`);

    fireEvent.click(getToggleButtonElement);
    expect(getToggleTextElement.textContent).toBe(`false`);
})