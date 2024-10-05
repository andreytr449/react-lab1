import Tag from "@/components/shared/tags-input/Tag";

type Props = {
    tags:string[],
    handleRemoveTag: (index:number) => void
}

export default function TagsList({tags, handleRemoveTag}: Props) {
    return (
        <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag, index) => (
                <Tag tag={tag} index={index} key={index} handleRemoveTag={handleRemoveTag}/>
            ))}
        </div>
    )
}