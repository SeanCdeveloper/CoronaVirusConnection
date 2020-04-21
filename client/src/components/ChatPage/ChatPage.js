import React, { useEffect, useState } from 'react';
import API from "../../utils/API";

const ChatPage = () => {
    // const [message, setMessages] = useState([]);
    const [formObject, setFormObject] = useState({});

    /* Load all messages to store inside `setMessage` */

    // useEffect(() => {
    //     loadMessages()
    // }, {})

    /* Load all messages and set them to `message` */

    // const loadMessages = () => {
    //     API.getMessages()
    //     .then(res => setMessages(res.data))
    //     .catch(err => console.log(err))
    // }

    /* Delete a `message` with given 'id', then reload Messages */

    // deleteMessage = (id) => {
    //     API.deleteMessage(id)
    //     .then(res => loadMessages())
    //     .catch(err => console.log(err));
    // }

    const handleInputChange = event => {
        const {name, value} = event.target;
        setFormObject({...formObject, [name]: value});

    }

    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //         API.saveMessage({
    //             title: formObject.title,
    //             author: formObject.author,
    //             message: formObject.message
    //         })
    //         .then(res => loadMessages())
    //         .catch(err => console.log(err));
    //     }
    // }

    return (
        <div className="container">
            <h1>Title</h1>
            <div className="NewsAreaWrap">
                <h1>News Area</h1>
            </div>
            <div className="ChatAreaWrap">
                <h1>Chat Area</h1>
                <div style={{border: "1px solid black", height: "200px", margin: "0 100px 0 100px"}}className="messageWell"></div>
                <form>
                    <input
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Title"
                        style={{width: "30em", height: "3em", marginTop: "1em"}}
                    />
                    <br/>
                    <input
                        onChange={handleInputChange}
                        name="author"
                        placeholder="Author"
                        style={{width: "30em", height: "3em", marginTop: "1em"}}
                    />
                    <br/>
                    <textarea
                        onChange={handleInputChange}
                        name="message"
                        placeholder="Enter Message"
                        style={{width: "30em", height: "6em", marginTop: "1em"}}
                    />
                    <br/>
                    <button
                        // onClick={handleFormSubmit}
                        type="button"
                        style={{width: "10em", height: "4em", marginTop: "1em"}}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatPage;

