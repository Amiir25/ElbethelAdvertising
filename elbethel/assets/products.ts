import { StaticImageData } from 'next/image';
import acrylicBendingTool from '../public/products/acrylic-bending-tool.webp';
import CNCRouter from '../public/products/cnc-router.webp';
import jumper from '../public/products/jumper.webp';
import laserCuttingMachine from '../public/products/laser-cutting-machine.webp';
import LEDModule from '../public/products/led-module.webp';
import LEDStripLight from '../public/products/led-strip.webp';
import millingCutter from '../public/products/milling cutters.webp';
import neonLight from '../public/products/neon-lights.webp';
import powerSupply from '../public/products/power-supply.webp';
import RGBController from '../public/products/rgb-controller.webp';
import solderingIron from '../public/products/soldering-iron.webp';
import zekolo from '../public/products/zekolo.webp';

export interface Product {
    id: number;
    image: StaticImageData;
    name: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 0,
        image: acrylicBendingTool,
        name: 'Acrylic Bending Tool',
        description: `A machine used to heat and bend acrylic sheets into desired shapes. It is perfect for creating letters, signs, and decorative pieces.
        The tool allows smooth curves and precise angles, making it essential for sign makers and creative designers. Using an acrylic bending tool ensures
        clean and professional results in LED signs, displays, and custom projects.`,
    },
    {
        id: 1,
        image: LEDModule,
        name: 'LED Modules',
        description: `Small, durable lighting units designed for signage and decorative purposes. They are commonly used for outdoor advertising,
        channel letter lighting, and light boxes. LED modules are waterproof and energy-efficient, providing uniform illumination for signs,
        boards, and displays. They can be connected in series for long installations and are easy to replace or maintain, ensuring your brand
        always stays brightly visible.`,
    },
    {
        id: 2,
        image: CNCRouter,
        name: 'CNC Router',
        description: `A machine that cuts, engraves, and shapes materials like wood, acrylic, or metal. It is widely used for creating sign letters,
        decorative panels, and custom designs. CNC routers provide precise, fast, and repeatable results, making them perfect for professional
        sign-making workshops. They save time and produce high-quality edges for letters, boards, and intricate patterns.`,
    },
    {
        id: 3,
        image: jumper,
        name: 'Jumper',
        description: `Small connecting wires used to join electrical components. They are commonly used in LED installations, electronic circuits, and
        signage wiring. Jumpers help create easy connections between modules, power supplies, and controllers. They are simple to use, reduce complicated
        wiring, and ensure a reliable electrical connection.`,
    },
    {
        id: 4,
        image: laserCuttingMachine,
        name: 'Laser Cutting Machine',
        description: `A laser cutting machine uses a focused laser beam to cut or engrave materials like acrylic, wood, or metal.
        It is commonly used for creating detailed signs, decorative pieces, and intricate patterns. Laser cutters provide smooth edges,
        accurate cuts, and consistent results, making them ideal for professional signage and custom projects. They can also engrave
        logos, designs, or letters directly onto materials.`,
    },
    {
        id: 5,
        image: zekolo,
        name: 'Sign Board (Zekolo)',
        description: `A durable advertising board used for outdoor and indoor signage. It is commonly used to display business names,
        store information, or promotional messages. Zekolo boards are strong, weather-resistant, and easy to mount on walls or poles.
        They provide a clean and professional look, making your brand visible and recognizable to everyone passing by.`,
    },
    {
        id: 6,
        image: LEDStripLight,
        name: 'LED Strip Lights',
        description: `Flexible lighting strips that can be cut to size and installed in various spaces. They provide bright and energy-efficient
        lighting for indoor decoration, backlighting for signs, and accent lighting for homes or commercial spaces. With easy installation,
        LED strips are perfect for highlighting edges, corners, and contours of walls or furniture. Their flexible design allows them to bend
        around curves and fit into tight spaces, making them a versatile lighting solution for creative projects.`,
    },
    {
        id: 7,
        image: millingCutter,
        name: 'Milling Cutter',
        description: `A rotating tool used in CNC routers and milling machines to remove material from a workpiece. It is commonly used to cut letters,
        shapes, and designs in acrylic, wood, or metal. Milling cutters provide smooth, precise cuts and are essential for creating professional signs,
        panels, and decorative pieces. Different sizes and shapes allow flexibility for various projects.`,
    },
    {
        id: 8,
        image: neonLight,
        name: 'Neon Lights',
        description: `Bright and colorful glass tubes filled with gas to produce vibrant lighting. They are commonly used for creative signage,
        decoration, and indoor or outdoor branding. Neon lights are ideal for making custom signs, letters, and artistic displays.
        They add a retro and eye-catching look to stores, cafes, and events, drawing attention with their unique glow.`,
    },
    {
        id: 9,
        image: powerSupply,
        name: 'Power Supplies',
        description: `Provides stable electricity for LED modules, lights, and electronic devices. The 200–400 watt range is suitable for small to
        medium sign installations. Power supplies protect lights from voltage fluctuations, ensuring long-lasting and consistent brightness.
        They are essential for safely powering LED strips, modules, and other signage equipment.`,
    },
    {
        id: 10,
        image: RGBController,
        name: 'RGB Controller',
        description: `A device used to change the color and patterns of RGB LED lights. It is commonly used in decorative lighting, signs, and displays
        to create colorful effects. RGB controllers allow users to switch between colors, adjust brightness, and create dynamic lighting animations.
        They make LED signage more eye-catching and engaging for customers.`,
    },
    {
        id: 11,
        image: solderingIron,
        name: 'Soldering Iron',
        description: `A handheld tool used to join electrical components with solder. It is essential for connecting wires, modules, and LED components in 
        signage and electronics. Soldering irons provide strong and reliable electrical connections, ensuring long-lasting and safe installations. They are
        commonly used for repairs, DIY projects, and professional LED assembly work.`,
    },
];