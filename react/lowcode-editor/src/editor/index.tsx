import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import Header from './components/Header/index.tsx'
import MaterialWrapper from './components/MaterialWrapper/index.tsx'
import EditArea from './components/EditArea/index.tsx'
import Setting from './components/Setting/index.tsx'
import Prview from './components/Prview/index.tsx'
import { useComponentStore } from './stores/components';

export default function LowcodeEditor() {
    const { mode } = useComponentStore();
    return (
        <div className="h-[100vh] flex flex-col">
            <div className="h-[60px] flex items-center border-b-[1px] border-b-[#000]">
                <div className="w-[100%] h-[60px] flex items-center justify-center">
                    <Header></Header>
                </div>
            </div>
            {
                mode === 'edit' ? (
                    <Allotment>
                        <Allotment.Pane preferredSize={240} maxSize={800} minSize={200}>
                            <MaterialWrapper></MaterialWrapper>
                        </Allotment.Pane>
                        <Allotment.Pane preferredSize={300} maxSize={1500} minSize={200}>
                            <EditArea></EditArea>
                        </Allotment.Pane>
                        <Allotment.Pane preferredSize={240} maxSize={800} minSize={200}>
                            <Setting></Setting>
                        </Allotment.Pane>
                    </Allotment>
                ) : (
                    <Prview></Prview>
                )
            }

        </div>

    )
}
