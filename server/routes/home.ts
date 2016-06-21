/**
 * Created by Chris on 2016-06-21.
 */
/// <reference path="../../typings/_werkTypings.d.ts" />

interface IRoute {
    path:string;
    response(req, res, next):void;
}

export class Home_Route implements IRoute{
    public path: string;

    constructor(){
        this.path="/";
    }

    public response(req, res, next):void{
        res.render("home", {name: "chris"});
    }

}
