import { useEffect, useState } from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { BiSolidSquareRounded } from "react-icons/bi";
import "./Shapes.css";

const Shapes = ({ positions }) => {
    const shapeSize = 25;
    const shapeBg = "#FFFFFF33";
    const [offsets, setOffsets] = useState(positions);
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollDiff = scrollPosition - lastScrollY;
        const offsetAmount = scrollDiff * 0.3;
        
        const newOffsets = offsets.map((pos) => {
            
            return {
                ...pos,
                top: `calc(${pos.top} + ${offsetAmount}px)`, // Update top position
            };
        });
        setOffsets(newOffsets);
        setLastScrollY(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Re-run effect when offsets change

    return (
        <div className="shapes_container">
            {offsets.map((pos, index) => (
                <div
                    key={index}
                    className="shape"
                    style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        transition: 'top 0.2s ease', // Smooth transition for movement
                    }}
                >
                    {pos.type === 'circle' && <FaCircle className="all_shapes" fill={shapeBg} size={shapeSize} />}
                    {pos.type === 'square' && <BiSolidSquareRounded className="rounded_square all_shapes" fill={shapeBg} size={shapeSize} />}
                    {pos.type === 'star' && <FaStar className="all_shapes" fill={shapeBg} size={shapeSize} />}
                </div>
            ))}
        </div>
    );
};

export default Shapes;
