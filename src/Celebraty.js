import React, { Component } from 'react';
import './Celeb.css';
import a from './images/male/a.jpg';
import b from './images/male/b.jpg';
import c from './images/male/c.jpg';
import d from './images/male/d.jpg';
import e from './images/male/e.jpg';
import f from './images/male/f.jpg';
import g from './images/male/g.jpg';
import h from './images/male/h.jpg';
import i from './images/male/i.jpg';
import j from './images/male/j.jpg';
import x from './images/male/x.jpg';

import k from './images/female/k.jpg';
import l from './images/female/l.jpg';
import m from './images/female/m.jpg';
import n1 from './images/female/n1.jpg';
import o from './images/female/o.jpg';
import p from './images/female/p.jpg';
import q from './images/female/q.jpg';
import r from './images/female/r.jpg';
import s from './images/female/s.jpg';
import t from './images/female/t.jpg';



export default class Celebraty extends Component {
    static defaultProps = {
        greet: 'Welcome'
    }

    constructor(props) {
        super(props);
        this.state = {
            randImg: x,
            message: 'I will show you what your future partner will look like!😳',
            sign: '',

        };

        this.randomMale = this.randomMale.bind(this);
        this.randomFemale = this.randomFemale.bind(this);
    }


    randomFemale() {
        var n = Math.floor(Math.random() * 10)
        var nameFe = [k, l, m, n1, o, p, q, r, s, t];
        var randImg2 = nameFe[n]

        this.setState({ randImg: randImg2 });
        this.setState({ message: `Your future Wife will look like this!` });
        this.setState({ sign: "👇" });

        console.log(randImg2);

    }



    randomMale() {
        var n = Math.floor(Math.random() * 10)
        var name = [a, b, c, d, e, f, g, h, i, j];
        var randImg2 = name[n]

        this.setState({ randImg: randImg2 });
        this.setState({ message: `Your future Husband will look like this!` });
        this.setState({ sign: "👇" });

        console.log(randImg2);
    }



    render() {
        return (
            <div>
                <h1>{this.props.greet}</h1>
                <h3>{this.state.message}</h3>
                <h4>{this.state.sign}</h4>
                <img src={this.state.randImg} className="img-rounded" alt="Cinque Terre" width="300" height="350" />
                <br />
                <h3>Select your Gender</h3>

                <button onClick={this.randomFemale} type="button" class="btn btn-danger">Male</button>
                <br />
                <br />
                <button onClick={this.randomMale} type="button" class="btn btn-danger">Female</button>

            </div>
        )
    }
}
