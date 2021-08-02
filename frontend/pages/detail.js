import UpperLayer from '../components/detail/UpperLayer';
import NavBar from '../components/Header';

export default function detail() {
    return (
        <div className="detail__page">
            <header>
                <NavBar />
            </header>

            <main>
                <UpperLayer />
            </main>
        </div>
    )
}
