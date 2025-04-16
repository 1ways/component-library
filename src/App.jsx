import { useState, createContext, use } from 'react'

import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonials from './components/Testimonials/Testimonials'
import CodeBlock from './components/CodeBlock/CodeBlock'
import Tooltip from './components/Tooltip/Tooltip'
import Popup from './components/Popup/Popup'

import cloudIcon from './assets/images/cloud-icon.svg'
import { FaAppleAlt } from "react-icons/fa"
import testiPic from './assets/images/testi-img.jpg'

const PopupContext = createContext()

export {
    PopupContext
}

export default function App() {
    const [isPopupShowed, setIsPopupShowed] = useState(false)
    const [popupType, setPopupType] = useState(null)

    function showPopup(e) {
        setIsPopupShowed(true)
        setPopupType(getRandomType())

        const button = e.currentTarget
        
        button.disabled = true

        let timeout = setTimeout(() => {
            button.disabled = false
            
            clearTimeout(timeout)
        }, 1000)
    }

    function hidePopup() {
        setIsPopupShowed(false)
    }

    function getRandomType() {
        const types = ['success', 'warning', 'error', 'info']

        const randomIndex = Math.floor(Math.random() * types.length)

        return types[randomIndex]
    }

    return (
        <PopupContext.Provider value={{isPopupShowed, hidePopup}}>
            <header className='header'>
                <h1 className='header__title'>Component Library</h1>
            </header>
            <main className='main'>
                <div className="container">
                    <section className='section'>
                        <h2 className='section__title'>Badges</h2>
                        <div className='badges'>
                            <Badge>Badge</Badge>
                            <Badge color='red'>Badge</Badge>
                            <Badge color='yellow'>Badge</Badge>
                            <Badge color='green'>Badge</Badge>
                            <Badge color='blue'>Badge</Badge>
                            <Badge color='indigo'>Badge</Badge>
                            <Badge color='purple'>Badge</Badge>
                            <Badge color='pink'>Badge</Badge>
                        </div>
                        <div className='badges'>
                            <Badge pill>Badge</Badge>
                            <Badge color='red' pill>Badge</Badge>
                            <Badge color='yellow' pill>Badge</Badge>
                            <Badge color='green' pill>Badge</Badge>
                            <Badge color='blue' pill>Badge</Badge>
                            <Badge color='indigo' pill>Badge</Badge>
                            <Badge color='purple' pill>Badge</Badge>
                            <Badge color='pink' pill>Badge</Badge>
                        </div>
                        <h3 className="section__sub-title">Usage</h3>
                        <CodeBlock language='jsx'>
                            {
                            `<Badge>Badge</Badge> // default Badge`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
                            `<Badge color="green">Badge</Badge> // colors: red, yellow, green, blue, indigo, purple, pink`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
                            `<Badge pill>Badge</Badge> // rounded Badge`
                            }
                        </CodeBlock>
                    </section>
                    <section className='section'>
                        <h2 className='section__title'>Banners</h2>
                        <div className="banners">
                            <Banner 
                                style='success' 
                                title='Congratulations!'
                                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
                            />
                            <Banner 
                                style='warning' 
                                title='Attention'
                                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
                            />
                            <Banner 
                                style='error' 
                                title='There is a problem with your application'
                                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
                            />
                            <Banner 
                                style='neutral' 
                                title='Update available'
                                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
                            />
                            <hr />
                            <Banner 
                                style='success' 
                                title='Congratulations!'
                            />
                            <Banner 
                                style='warning' 
                                title='Attention'
                            />
                            <Banner 
                                style='error' 
                                title='There is a problem with your application'
                            />
                            <Banner 
                                style='neutral' 
                                title='Update available'
                            />
                        </div>
                        <h3 className="section__sub-title">Usage</h3>
                        <CodeBlock language='jsx'>
                            {
                            `<Banner style="succes" title="Congratulations!" /> // Banner without inner text. Styles: success, warning, error, neutral`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
`<Banner 
    style='success' 
    title='Congratulations!'
    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
/> // Banner with inner text`
                            }
                        </CodeBlock>
                    </section>
                </div>
                <section className="section card-section">
                    <h2 className='section__title'>Card</h2>
                    <div className="card-container">
                        <Card icon={cloudIcon} title="Easy Deployment">
                            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card>
                    </div>
                    <div className="card-container">
                        <Card icon={<FaAppleAlt />} title="Easy Deployment">
                            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card>
                    </div>
                    <h3 className="section__sub-title">Usage</h3>
                    <div className="container">
                        <CodeBlock language='jsx'>
                            {
`<Card title="Easy Deployment" iconBgColor="#000">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
</Card> // custom color for icon`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
`<Card title="Easy Deployment">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
</Card> // card with default icon`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
`import cloudIcon from './assets/images/cloud-icon.svg'

<Card icon={cloudIcon} title="Easy Deployment">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
</Card> // actual path to icon`
                            }
                        </CodeBlock>
                        <CodeBlock language='jsx'>
                            {
`import { FaAppleAlt } from "react-icons/fa"

<Card icon={<FaAppleAlt />} title="Easy Deployment">
    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
</Card> // JSX icon`
                            }
                        </CodeBlock>         
                    </div>
                </section>
                <div className="section">
                    <h2 className='section__title testimonials__title'>Testimonials</h2>
                    <Testimonials 
                        img={testiPic} 
                        author={'May Andersons'} 
                        occupation={'Workcation, CTO'}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </Testimonials>
                    <h3 className="section__sub-title">Usage</h3>
                    <div className="container">
                        <CodeBlock language='jsx'>
                            {
`<Testimonials 
    img={testiPic} 
    author={'May Andersons'} 
    occupation={'Workcation, CTO'}
>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
</Testimonials>`
                            }
                        </CodeBlock>         
                    </div>
                </div>
                <div className="container">
                    <div className="section">
                        <h2 className="section__title">Tooltips</h2>
                        <div className="tooltips">
                            <Tooltip title={'Archive notes'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} style={'light'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} color={'blue'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} style={'light'} color={'blue'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} color={'pink'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} style={'light'} color={'pink'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} color={'green'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                            <Tooltip title={'Archive notes'} style={'light'} color={'green'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                            </Tooltip>
                        </div>
                        <h3 className="section__sub-title">Usage</h3>
                        <div className="container">
                            <CodeBlock language='jsx'>
                            {
`<Tooltip title={'Archive notes'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
</Tooltip> // default Tooltip`
                            }
                            </CodeBlock>
                            <CodeBlock language='jsx'>
                            {
`<Tooltip title={'Archive notes'} style={'light'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
</Tooltip> // default Tooltip with light style`
                            }
                            </CodeBlock> 
                            <CodeBlock language='jsx'>
                            {
`<Tooltip title={'Archive notes'} color={'blue'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
</Tooltip> // colored Tooltip; colors: blue, pink, green`
                            }
                            </CodeBlock>  
                            <CodeBlock language='jsx'>
                            {
`<Tooltip title={'Archive notes'} style={'light'} color={'blue'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
</Tooltip> // colored Tooltip with light style`
                            }
                            </CodeBlock>      
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="section__title">Popups</h2>
                        <button className='popup__btn' onClick={showPopup}>Click to see the Popup</button>
                        <div className="tooltips">
                            <Popup 
                                title='Success' 
                                type={popupType}
                            >
                                Your work has been saved
                            </Popup>
                            {/* <Popup 
                                title='Information' 
                                type='warning'
                                show={isPopupShowed}
                            >
                                A network error was detected
                            </Popup>
                            <Popup 
                                title='Warning' 
                                type='info'
                                show={isPopupShowed}
                            >
                                Please read updated information
                            </Popup>
                            <Popup 
                                title='Error' 
                                type='error'
                                show={isPopupShowed}
                            >
                                Please re-save your work again
                            </Popup> */}
                        </div>
                        <h3 className="section__sub-title">Usage</h3>
                        <div className="container">
                            <CodeBlock language='jsx'>
                            {
`<Popup 
    title='Success' 
    type='success'
>
    Your work has been saved
</Popup> // type: success, info, error, warning`
                            }
                            </CodeBlock>
                        </div>
                    </div>
                </div>
            </main>
        </PopupContext.Provider>
    )
}
