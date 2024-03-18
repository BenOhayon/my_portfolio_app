import React, { useEffect } from 'react'
import './Drawer.css'
import { SwipeableDrawer } from '@mui/material'
import { DRAWER_DIRECTIONS, DRAWER_TRANSITION_DURATION } from '../../utils/constants'
import { useHistoryContext } from '../../contexts/historyContext'

/**
 * Represents a drawer.
 * It can be opened from any direction: top, left, right or bottom.
 * It can be closed by swiping the menu down or clicking/touching outside the drawer.
 * 
 * @param {boolean} isOpen - Determins whether the drawer is open or not 
 * @param {function} onOpen - A function that opens the drawer
 * @param {function} onClose - A function that closes the drawer
 * @param {string} direction - The direction from which the drawer will be opened, can be one of the following: 
 *                              PAYDIN_DRAWER_DIRECTION.BOTTOM, PAYDIN_DRAWER_DIRECTION.TOP, PAYDIN_DRAWER_DIRECTION.RIGHT or PAYDIN_DRAWER_DIRECTION.LEFT
 * @param {number} topRightBorderRadiusPx - The top right border radius in pixels
 * @param {number} topLeftBorderRadiusPx - The top left border radius in pixels
 * @param {number} bottomRightBorderRadiusPx - The bottom right border radius in pixels
 * @param {number} bottomLeftBorderRadiusPx - The bottom left border radius in pixels
 * @param {boolean} hasPadding - Determins whether the drawer has padding or not
 * @param {number} paddingTopPx - The top padding of the drawer in pixels, ignored when 'hasPadding' is false
 * @param {number} paddingRightPx - The right padding of the drawer in pixels, ignored when 'hasPadding' is false
 * @param {number} paddingLeftPx - The left padding of the drawer in pixels, ignored when 'hasPadding' is false
 * @param {number} paddingBottomPx - The bottom padding of the drawer in pixels, ignored when 'hasPadding' is false
 * @param {boolean} disableBackdrop - Determins whether the grey background, which appears when the drawer is open, is shown or not
 * @param {string} height - A custom height for this drawer
 */
export default function Drawer({
    children,
    isOpen,
    onOpen,
    onClose,
    direction = PAYDIN_DRAWER_DIRECTION.BOTTOM,
    topRightBorderRadiusPx = 0,
    topLeftBorderRadiusPx = 0,
    bottomRightBorderRadiusPx = 0,
    bottomLeftBorderRadiusPx = 0,
    hasPadding = true,
    paddingTopPx = 20,
    paddingRightPx = 20,
    paddingLeftPx = 20,
    paddingBottomPx = 20,
    disableBackdrop = false,
    height = null
}) {
    const history = useHistoryContext()


    useEffect(() => {
        if (isOpen) {
            history.addBackHandler(onClose)
        }
    }, [isOpen])

    function isDirectionHorizontal() {
        return [
            DRAWER_DIRECTIONS.RIGHT,
            DRAWER_DIRECTIONS.LEFT
        ].includes(direction)
    }

    function closeDrawer() {
        history.goBack()
    }

    return (
        <SwipeableDrawer
            sx={{
                ".MuiDrawer-paper": {
                    ...(height ? { height } : {}),
                    width: isDirectionHorizontal() ? '90% !important' : '100% !important',
                    borderTopRightRadius: `${topRightBorderRadiusPx}px`,
                    borderTopLeftRadius: `${topLeftBorderRadiusPx}px`,
                    borderBottomRightRadius: `${bottomRightBorderRadiusPx}px`,
                    borderBottomLeftRadius: `${bottomLeftBorderRadiusPx}px`,
                },
                ".MuiBackdrop-root": {
                    opacity: disableBackdrop ? '0 !important' : 1
                }
            }}
            anchor={direction}
            open={isOpen}
            onClose={closeDrawer}
            onOpen={onOpen}
            swipeAreaWidth={0}
            transitionDuration={DRAWER_TRANSITION_DURATION}
        >
            <div className="paydin-drawer-swiper"></div>
            <div className="paydin-drawer-content" style={{ padding: `${hasPadding ? paddingTopPx : 0}px ${hasPadding ? paddingRightPx : 0}px ${hasPadding ? paddingBottomPx : 0}px ${hasPadding ? paddingLeftPx : 0}px` }}>
                {children}
            </div>
        </SwipeableDrawer>
    )
}