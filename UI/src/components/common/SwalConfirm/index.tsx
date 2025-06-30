import Swal from "sweetalert2";

type Props = {
    callback: Function;
    confirmButtonText: string;
    title: string;
    text: string;
};

function confirmMessage(props: Props) {

    Swal.fire({
        title: props.title ,
        text: props.text ,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: props.confirmButtonText
    }).then((result) => {
        if (result.isConfirmed) {
            props.callback();
        }
    });
}

export default confirmMessage
