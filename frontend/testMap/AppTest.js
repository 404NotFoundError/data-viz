import React, { Component, Fragment } from 'react';
import { Stage, withPixiApp, Container, PixiComponent } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import wines from "../helpers/mockups/mockup_wine";
import Logo from '../components/Logo/Logo';
import Filter from '../components/Filter/Filter';
import Layout from "../components/Layout/Layout";
import ZoomBtn from "../components/ZoomBtn/ZoomBtn";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import FilterTitle from "../components/FilterTitle/FilterTitle";
import SearchModal from "../components/SearchModal/SearchModal";

const colors = {
    white: 0xFFE8B5
}

const Mover = withPixiApp(class extends Component {
  state = { value: 0 }
  counter = 0

  componentDidMount() {
    this.setState({ value: this.props.from })
    this.props.app.ticker.add(this.tick)
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick)
  }

  tick = delta => {
    const { ease, from, to, speed } = this.props

    this.counter += speed * delta
    const value = from + (to-from) / 2 + ease(this.counter) * (from - to) / 2

    this.setState({ value })
  }

  render() {
    //   console.log(this.state.value)
    //   console.log(this.counter)
    return this.props.children({ value: this.state.value, i: this.counter })
  }
})

const Rectangle = PixiComponent('Rectangle', {
  create: () => new PIXI.Graphics(),
  applyProps: (g, _, props) => {
    const { fill, x, y, width, height } = props

    g.clear()
    g.beginFill(fill)
    g.drawRect(x, y, width, height)
    g.endFill()
  }
})

const Circle = PixiComponent('Circle', {
  create: () => new PIXI.Graphics(),
  applyProps: (g, _, props) => {
    const { fill, x, y, radius, points, mouseOver, mouseLeave } = props

    g.clear()
    g.beginFill(fill)
    g.drawCircle(x, y, radius)
    g.endFill()
    g.interactive = true;
    g.mouseover = function(mouseData) {
        this.alpha = 0.5;
        console.log(points, x, y)
        mouseOver()
        // console.log("over", mouseData)
        // console.log("over", this)
    }
    g.mouseout = function(mouseData) {
        // console.log("out", mouseData)
        mouseLeave()
        this.alpha = 1;
    }
    g.mousedown = function(mouseData) {
        // console.log("click", mouseData)
        this.x += 200
    }
  }
})

const Modal = ({ points, isOpen }) => {
    const opacity = isOpen ? 1 : 0
    return (
        <div style={{
            opacity: opacity,
            background: '#FFFFFF',
            width: 200,
            height: 200,
            position: 'absolute',
            zIndex: 200,
            bottom: 20,
            left: 20
        }}>
            <p>Points: {points}</p>
        </div>
    );
}

class AppTest extends Component {
    state = {
        posX: 60,
        posY: 60,
        points: 0,
        isModalOpen: false
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }

    updatePos = () => {
        this.setState({posX: this.state.posX + 100, posY: this.state.posY + 100})
    }

    convertPointsToPosition = points => {
        // return (points / 100) * window.innerWidth - window.innerWidth * (0.05 + (0.035 * (100 - points))) + (Math.random()*50 - 50/2);
        return (points / 100) * window.innerWidth - window.innerWidth * (0.05 + (0.035 * (100 - points)));
    }

    zoom = inOrOut => {
        
    }

    toggleModal = (isOpen, points) => {
        this.setState({
            isModalOpen: isOpen,
            points: points
        })
    }
    
    render() {
        const { data } = this.props;
        const { points, isModalOpen } = this.state;

        return (
            <Fragment>
                {/* <button onClick={this.toggleModal}>CLICK</button> */}
                <Logo />
                <BurgerMenu />
                <Filter />
                <ZoomBtn zoom={true}/>
                <ZoomBtn zoom={false}/>
                <FilterTitle filter={"rate"}/>
                <SearchModal />
                <Modal points={points} isOpen={isModalOpen} />
                {/* <button className="zoomIn" style={{
                    position: "fixed",
                    top: 20,
                    right: 20,
                    zIndex: 100,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: 'none',
                    opacity: 0.4,
                    transition: "0.2s ease-in-out",
                    outline: "none",
                    cursor: "pointer"
                }} onClick={() => this.zoom('+')}>
                    <div style={{
                        width: 10,
                        height: 1.2,
                        background: "black",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)'
                    }}/>
                    <div style={{
                        width: 1.2,
                        height: 10,
                        background: "black",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)'
                    }}/>
                </button>
                <button className="zoomOut" style={{
                    position: "fixed",
                    top: 54,
                    right: 20,
                    zIndex: 100,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: 'none',
                    opacity: 0.4,
                    transition: "0.2s ease-in-out",
                    outline: "none",
                    cursor: "pointer"
                }} onClick={() => this.zoom('-')}>
                    <div style={{
                        width: 10,
                        height: 1.2,
                        background: "black",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)'
                    }}/>
                </button> */}
                <Stage width={window.innerWidth} height={window.innerHeight} options={{ antialias: true, backgroundColor: 0x240349 }}>
                {data.map((wine, i) => (
                            <Circle 
                            x={this.convertPointsToPosition(wine.points)}
                            y={window.innerHeight - 0.1*window.innerHeight - i*0.5}
                            // y={window.innerHeight - 0.10*window.innerHeight - (Math.random() * (0.80*window.innerHeight))}
                            radius={wine.points - 40}
                            fill={colors[wine.couleur] ? colors[wine.couleur] : 0xd51844}
                            points={wine.points}
                            mouseOver={() => this.toggleModal(true, wine.points)}
                            mouseLeave={() => this.toggleModal(false)}
                            />
                ))}
                    {/* <Mover from={0} to={0} ease={Math.cos} speed={.3}>
                    {({ value, i }) => (
                        <Circle x={220 + value + Math.sin(i)* 10}
                        y={220 + value + Math.cos(i/2)* 50}
                        radius={30 + Math.cos(i/10) * 20} fill={0x00ff00}/>
                    )}
                    </Mover> */}
                </Stage>
            </Fragment>
        )
    }
};

export default AppTest;