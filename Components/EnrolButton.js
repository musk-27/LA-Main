import Link from "next/link";
import React, { useState, useEffect } from 'react';


const EnrolButton = () => {

    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const enrolSpinElement = document.querySelector('.newEnrolBg');

        function pauseAnimation() {
            enrolSpinElement.style.animationPlayState = 'paused';
            setPaused(true);
        }

        function resumeAnimation() {
            enrolSpinElement.style.animationPlayState = 'running';
            setPaused(false);
        }

        enrolSpinElement.addEventListener('animationiteration', () => {
            if (enrolSpinElement.style.backgroundColor === 'rgb(241, 137, 180)' || enrolSpinElement.style.color === 'rgb(248, 137, 182)') {
                pauseAnimation();
                setTimeout(resumeAnimation, 4000);
            } else if (enrolSpinElement.style.backgroundColor === 'rgb(242, 201, 58)' || enrolSpinElement.style.color === 'rgb(209, 196, 255)') {
                pauseAnimation();
                setTimeout(resumeAnimation, 4000);
            }
        });

        return () => {
            enrolSpinElement.removeEventListener('animationiteration', pauseAnimation);
            enrolSpinElement.removeEventListener('animationiteration', resumeAnimation);
        }
    }, []);

    return (
        <div>

            <div className="newEnrolNowSection">
                <Link href="/ApplyNow">
                    <div className="newEnrolBg"></div>
                    <div className="newEnrolText">
                        <h4>
                            ENROL <br /> NOW
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default EnrolButton;
