import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Difference between authorization and authentication</Accordion.Header>
                            <Accordion.Body>
                                authentication হলো যাচাইকরণ প্রকিয়া | User টি সঠিক কিনা কিংবা একজন User এর ডক্যুমেন্ট অন্য কোনো User এক্সেস করতেছে তা যাচাই করা | authorization যাচাই করার পর যদি User সঠিক হয় তাকে এক্সেস প্রদান করা | অর্থাৎ যদি User সঠিক হয় তাকে বৈধতা ঘোষণা করা |authentication যাচাই করা authorization হলো User সঠিক হয় তাকে বৈধতা ঘোষণা করা |
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                                Firebase Authentication খুব সহজে ব্যবহার করা যায় | অনেক রিসোর্স পাওয়া যায় এবং ডক্যুমিনেশন গুলো খুব সহজ | খুব সহজে user signin & signup ,google sign In sign up , Facebook , Twitter, github sign in sign up করা যায় | বর্তমান আমি একটা সিস্টেম শিখছি আমার কাছে  খুব সহজ মনে হয়েছে | Google firebase hooks থাকার কারণে বেশি ব্যবহার করা হচ্ছে Firebase |
                                <br />
                                Google Firebase ছাড়া আরো অনেক Firebase সিস্টেম আছে | অন্য কোনো বিকল্প থাকলেও আমি Google Firebase আমার কাছে বেশি ভালো লাগে & কাজ করতে easy|
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                            <Accordion.Body>
                                Google Firebase অনেক Services দিয়ে থাকে |
                                <li>Cloud Firestore.</li>
                                <li>Cloud Functions..</li>
                                <li>Authentication.</li>
                                <li>Hosting.</li>
                                <li>Cloud Storage.</li>
                                <li>Google Analytics.</li>
                                <li>Predictions.</li>
                                <li>Cloud Messaging.</li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </>
    );
};

export default Blog;