import Link from 'next/link';

const LINKS = [
    { name: 'Navigation panel', link: 'menu' },
    { name: 'Table with data', link: 'table' },
    { name: 'Autocomplete', link: 'autocomplete' },
    { name: 'Products', link: 'products' },
    { name: 'Chat', link: 'chat' },
    { name: 'Progress bar', link: 'progress-bar' },
    { name: 'Sudoku', link: 'sudoku' },
    { name: 'Sea battle', link: 'sea-battle' },
    { name: 'Piano', link: 'piano' },
    { name: 'Timeline', link: 'timeline' },
    { name: 'Map', link: 'map' },
    { name: 'Password checker', link: 'password-checker' },
    { name: 'Tags input', link: 'tags-input' },
    { name: 'Memory card', link: 'memory-card' },
    { name: 'Tic-tac-toe', link: 'tic-tac-toe' },
    { name: 'Timer', link: 'timer' },
    { name: 'Chess board', link: 'chess-board' },
    { name: 'Keyboard', link: 'keyboard' },
    { name: 'Calculator', link: 'calculator' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold my-6 text-black">Project Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
                {LINKS.map((item, index) => (
                    <Link href={`/${item.link}`} key={index} >
                        <span className="block bg-blue-500 text-white text-center p-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
