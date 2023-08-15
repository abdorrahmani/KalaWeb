import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";

export function Create() {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: '',
        slug :'',
        body : '',
        type:'',
        price:'',
        tags:'',
        status:'0',
        description:'',
        poster:null,
        category: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('course.store'), {forceFormData:true});
    };
    return (
        <>
            <form onSubmit={submit} className="form-box-profile">
                <div className="pt-5 input-box w-[940px] text-black">
                    <TextInput
                        id="title"
                        label="Title"
                        value={data.title}
                        handleChange={(e) => setData('title', e.target.value)}
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.title} />
                    <TextInput
                        id="slug"
                        type="text"
                        label="Slug"
                        value={data.slug}
                        handleChange={(e) => setData('slug', e.target.value)}
                        className="text-white"
                    />
                    <InputLabel id="course_id" className="!text-white">Type:</InputLabel>

                    <InputLabel id="course_id" className="!text-white">Category  :</InputLabel>
                    {/*<Select*/}
                    {/*    labelId="Category"*/}
                    {/*    id="category"*/}
                    {/*    className="pl-3 pr-3 mb-3 !text-white w-full"*/}
                    {/*    value={category}*/}
                    {/*    onChange={(event) => setData('category',event.target.value)}*/}

                    {/*    label="Category">*/}
                    {/*    <MenuItem className="!text-white" value="">*/}
                    {/*        <em>Choose Course Category</em>*/}
                    {/*    </MenuItem>*/}
                    {/*    <MenuItem value="laravel">Laravel</MenuItem>*/}
                    {/*    <MenuItem value="web-design">WebDesign</MenuItem>*/}
                    {/*    <MenuItem value="javascript">JavaScript</MenuItem>*/}
                    {/*    <MenuItem value="php">PHP</MenuItem>*/}
                    {/*    <MenuItem value="python">Python</MenuItem>*/}
                    {/*</Select>*/}
                    <InputLabel id="course_id" className="!text-white">Poster :</InputLabel>
                    <input type="file" className="my-5"  onChange={e => setData('poster', e.target.files[0])}
                           accept="image/png, image/jpeg" multiple/>
                    <InputLabel id="course_id" className="!text-white">Description:</InputLabel>
                    <br className="mt-20"/>
                    <InputLabel id="course_id" className="!text-white">Body:</InputLabel>
                    <div dir="ltr">
                        <CKEditor
                            editor={ Editor }
                            id="editor"
                            config={ editorConfiguration }
                            data="Body"
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setData('body' , data);
                                console.log( { event, editor, data } );
                            } }
                        />
                    </div>

                    <TextInput id="price" type="text" label="Price" value={data.price}
                               handleChange={(e) => setData('price', e.target.value)}  helperText="Like : 256,000 toman"
                    />
                    <TextInput id="tags" type="text" label="Tags" value={data.tags}
                               handleChange={(e) => setData('tags', e.target.value)}  helperText="Whit Space sprite tags "
                    />
                    <TextInput id="status" type="text" label="Status" value={data.status}
                               handleChange={(e) => setData('status', e.target.value)}  helperText="0 => recording or 1 => completed"
                    />

                </div>


                <div className="flex items-center justify-around mt-4">
                    <PrimaryButton type="submit" className="ml-4 button-shine" processing={processing}>Save</PrimaryButton>

                </div>
            </form>
        </>
    )
}
