

import { MasterBtn } from "../../../components"
import "./index.css"

const BladeE = () =>{
    return(
        <section className="bg-light  bladeD flex align-center justify-around  master-padding">
        <div className=" text-wrapper flex flex-col gap-sm  align-start  py-x-lg ">
            <div className=" top-border"></div>
            <span className=" fs-title  my-x-lg uppercase fw-bold">Join us </span>
            <div className=" flex flex-col gap-sm my-x-lg py-lg ">
                <span className=" fs-title  lh-large text-spaced  uppercase fw-bold ">BE A PART OF OUR HAPPY COMMUNITY</span>
                <span className=" lh-large text-light fs-larger  ">We take immense pride in our achievements and have a happy and satisfied community that trusts our work wholeheartedly. Then what are you waiting for ,come and be a part of the merklabs family, because we are here always for you.</span>
            </div>
            < MasterBtn />
        </div>
        <div className="code-wrapper py-x-lg  ">
            <div className=" flex align-center justify-end gap-x-lg px-x-lg  my-lg  m-left-auto  ">
                <button className="py-sm px-lg fs-large bg-light-hover rounded-sm">Node</button>
                <button className="py-sm px-lg fs-large bg-light-hover rounded-sm">Java</button>
                <button className="py-sm px-lg fs-large bg-light-hover rounded-sm">Curl</button>
            </div>
            <div className=" code-view ">
                <pre>
                    {`response = stub.PostModelOutputs(
service_pb2.PostModelOutputsRequest(
    model_id='{fefefef}',
    inputs=[
        resources_pb2.Input(
            data=resources_pb2.Data(
                image=resources_pb2.Image(
                    url="https://samples.clarifai.metro-north.jpg"
                )
            )
        )
    ]
),
metadata=metadata
)
print("Predicted concepts:")
for concept in response.outputs[0].data.concepts:
print(concept.name + " " + str(concept.value))

metadata=metadata
)
print("Predicted concepts:")
for concept in response.outputs[0].data.concepts:
print(concept.name + " " + str(concept.value))`}
                </pre>
            </div>
        </div>
    </section>

    )
}

export default BladeE 