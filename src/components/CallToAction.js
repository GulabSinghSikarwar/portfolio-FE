import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function CallToAction() {
    const [text, count] = useTypewriter({
        words: [
            "Some of the projects ",
        ]
        , loop: true,
        delaySpeed: 2000,


    })
    return (
        <div>
            <section class="page-section bg-dark text-white">
                <div class="container px-4 px-lg-5 text-center">
                    <Cursor cursorColor='white' />

                    <h2 class="mb-4" style={{
                        textTransform: "uppercase"
                    }}><span>{text}
                        </span><Cursor cursorColor='white' />

                    </h2>
                    {/* <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a> */}
                </div>
            </section>
        </div>
    )
}

export default CallToAction
