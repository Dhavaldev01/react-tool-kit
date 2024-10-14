import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import ApiCallTest from "../components/api-testing";

describe("Api testing File " , ()=>{
    it('chaeck list of users fetching',async() =>{
        global.fetch = jest.fn(()=> Promise.resolve({

            json: () => Promise.resolve({ users: [
                {
                    id: 1,
                    firstName: "My Name" 
                },
                {
                    id: 2,
                    firstName: "John Doe"  
                }
            ]})
            
        }));

        render(<ApiCallTest/>)

        expect(screen.getByText('Loading Data...')).toBeInTheDocument();

        await waitFor(()=>{
            expect(screen.getByText('My Name')).toBeInTheDocument();
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        });

        expect(screen.queryByText("Loading Data...")).not.toBeInTheDocument();
    });
});