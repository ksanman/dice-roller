import Four from "./four";
import Six from './six';
import Eight from './eight';
import Ten from './ten';
import Twelve from './twelve';
import Twenty from './twenty';

function getDice(faces, label) {
    switch(parseInt(faces)) {
        case 4: return <Four height={75} width={75} label={label} />;
        case 6: return <Six height={75} width={75} label={label} />;
        case 8: return <Eight height={75} width={75} label={label} />;
        case 10: return <Ten height={75} width={75} label={label} />;
        case 12: return <Twelve height={75} width={75} label={label} />;
        case 20: return <Twenty height={75} width={75} label={label} />;
        default: break;
    };
}

export default getDice;