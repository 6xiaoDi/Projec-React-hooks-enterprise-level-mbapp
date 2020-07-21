import React from 'react';
export default function Skeleton(){
    return (
        <div className="skeleton">
            {/*每行随便打几个，目的是为了占位用的*/}
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-row">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
} 