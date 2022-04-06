contract Test {
    ///#if_succeeds 0==0;
    /// https://consensys.net/#test
    /// #if_succeeds
    ///         1
    ///             ==
    ///                 1;
    /// @custom:scribble #if_succeeds 2 == 2;
    function some() public {}

    /**#if_succeeds 0==0;
     * https://consensys.net/#test
     * #if_succeeds
     *         1
     *             ==
     *                 1;
     * @custom:scribble #if_succeeds 2 == 2;
     */
    function other() public {}
}
