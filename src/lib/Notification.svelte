<script>

    export let id;
    export let unread;
    export let user;
    export let avatar;
    export let action;
    export let subject;
    export let message;
    export let image;
    export let age;

</script>

<div class="container" class:unread>
    <div class="main-content">
        <img src={avatar} alt="User avatar" class="avatar">
        <div class="details">
            <p class="notification">
                <span class="text user">{user}</span>
                <span class="text action">{action}</span>
                {#if subject}<span class="text subject">{subject}</span>{/if}
                {#if unread}<span class="dot"></span>{/if}
            </p>
            <span class="text age">{age}</span>
        </div>
        {#if image}
            <img src={image} alt="Thumbnail" class="thumbnail">
        {/if}
    </div>

    {#if message}
        <div class="message-container">
            <p class="message">{message}</p>
        </div>
    {/if}
    
</div>

<style>
    .container {
        border-radius: 8px;
        padding: 18px 20px 17px 20px;
        margin-bottom: 8px;
    }

    .container.unread {
        background: var(--snow);
    }

    .main-content {
        display: flex;
        align-items: flex-start;
    }

    .avatar {
        width: 45px;
        height: 45px;
        margin-right: 19px;
    }

    .text {
        font-size: 16px;
        font-weight: 500; 
        color: var(--dark-grey-blue);
        margin-right: 3px;
    }

    .user {
        font-weight: 800;
        color: var(--very-dark-grey-blue);
    }

    .subject {
        font-weight: 800;
        cursor: pointer;
    }

    .subject:hover {
        color: var(--blue);
    }

    .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--red);
        margin-bottom: 2px;
    }

    .notification {
        margin-bottom: 4px;
    }
    
    .age {
        color: var(--grey-blue);
    }

    .thumbnail {
        width: 45px;
        height: 45px;
        margin-left: auto;
    }

    .message-container {
        border: 1px solid var(--very-light-grey-blue);
        border-radius: 5px;
        padding: 17px 20px 20px 20px;
        margin: 13px 0 3px 64px;
        cursor: pointer;
    }

    .message-container:hover {
        background: var(--light-grey-blue);
    }

    .message {
        font-size: 16px;
        font-weight: 500px;
        color: var(--dark-grey-blue);
    }

    @media (max-width: 650px) {
        .container {
            padding: 16px 14px 16px 16px;
            margin-bottom: 10px;
        }

        .avatar {
            width: 39px;
            height: 39px;
            margin-right: 13px;
        }

        .text {
            font-size: 14px; 
            margin-right: 3px;
        }

        .dot {
            margin-bottom: 2px;
        }

        .notification {
            margin-bottom: 3px;
        } 

        .thumbnail {
            width: 39px;
            height: 39px;
        }

        .message-container {
            padding: 16px;
            margin: 12px 0 3px 52px;
        }

        .message {
            font-size: 14px;
        }
    }

</style>