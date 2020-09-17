import React from 'react'
import {Route} from "react-router";
import MainLayout from './components/MainLayout';

export default function () {
    return (
        <>
            <Route component={MainLayout} path='/'>


            </Route>
        </>
    )
}
