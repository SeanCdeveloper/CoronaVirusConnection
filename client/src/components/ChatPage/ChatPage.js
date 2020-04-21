import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const [message, setMessage] = useState([]);
    const [formObject, setFormObject] = useState({});

    /* Load all messages to store inside `setMessage` */

    // useEffect(() => {
    //     loadMessages()
    // }, {})

    /* Load all messages and set them to `message` */

    // loadMessages = () => {
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

    // handleFormSubmit = (event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //         API.saveBook({
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
                <div></div>
                <form>
                    <input
                        // onChange={handleInputChange}
                        name="title"
                        placeholder="Title"
                    />
                    <br/>
                    <input
                        // onChange={handleInputChange}
                        name="author"
                        placeholder="Author"
                    />
                    <br/>
                    <textarea
                        // onChange={handleInputChange}
                        name="message"
                        placeholder="Enter Message"
                    />
                    <button
                        // onClick={handleFormSubmit}
                        type="button"
                    >

                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatPage;

